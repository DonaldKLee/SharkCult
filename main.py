from flask import Flask, render_template, url_for, redirect, request
import random, os


# MongoDB
import dns # For mongodb to work, this installs an older version of bson, if version error, uninstall bson/pymongo to get it working again
import pymongo # If dnspython module error, do 'pip install pymongo[srv]'
MongoDBUsername = os.environ['MongoDBUsername']
MongoDBPassword = os.environ['MongoDBPassword']
client = pymongo.MongoClient("mongodb+srv://"+ MongoDBUsername +":"+ MongoDBPassword +"@cluster0.qrjjj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client.database
# ^^^


app = Flask(  # Create a flask app
	__name__,
	template_folder='templates',  # Name of html file folder
	static_folder='static'  # Name of directory for static files
)

# Prevents cache from using the old css file, makes it use the updated one
@app.context_processor
def override_url_for():
    return dict(url_for=dated_url_for)

def dated_url_for(endpoint, **values):
    if endpoint == 'static':
        filename = values.get('filename', None)
        if filename:
            file_path = os.path.join(app.root_path,endpoint, filename)
            values['q'] = int(os.stat(file_path).st_mtime)
    return url_for(endpoint, **values)
# ^ ^ ^

@app.route('/')  # Home page
def home():
    leaderboard_data = db.leaderboard.find() # Gets all the objects in the leaderboard database

    sorted_leaderboard = db.leaderboard.find().sort("score", -1)
   

    return render_template("index.html", leaderboard_data=sorted_leaderboard)


@app.route('/game')  # Game page
def game():
	return render_template("game.html")

@app.route('/submit_score', methods=["GET", "POST"])
def handle_data():
    score = request.form['user_score']
    nickname = request.form['nickname']

    player = {
        "score": int(score),
        "nickname": nickname,
    }

    db.leaderboard.insert_one(player)

    return redirect("/")


# For repl hosting
if __name__ == "__main__":  # Makes sure this is the main process
	app.run( # Starts the site
		host='0.0.0.0',  # EStablishes the host, required for repl to detect the site
		port=random.randint(2000, 9000),  # Randomly select the port the machine hosts on.
        debug=True # Updates site when new changes are made
    )