from flask import Flask, render_template

app = Flask(__name__)

race_headings = ("Grand Prix","Date","Car","Laps","Winner","Second Place","Third Place")

race_data = (("Bahrain","2023-03-05","Red Bull Racing Honda RBPT","57","Max Verstappen","Sergio Perez","Fernando Alonso"))




@app.route('/')
def table():
      return render_template("results.html",race_headings=race_headings, race_data=race_data)



