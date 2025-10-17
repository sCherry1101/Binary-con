from flask import Flask, render_template, request, jsonify

app = Flask(__name__)  

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/convert", methods=["POST"])
def convert():
    data = request.json
    direction = data.get("direction")
    value = data.get("value")

    try:
        if direction == "dec_to_bin":
            result = bin(int(value))[2:]
        elif direction == "bin_to_dec":
            result = str(int(value, 2))
        else:
            result = "Invalid direction"
    except:
        result = "Error: invalid input"

    return jsonify({"result": result})

if __name__ == "__main__":
    app.run(debug=True)
