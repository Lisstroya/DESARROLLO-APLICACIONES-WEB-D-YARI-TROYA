from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def inicio():
    return render_template("index.html")


@app.route("/solicitudes")
def solicitudes():
    return render_template("solicitudes.html")


@app.route("/cuentas")
def cuentas():
    return render_template("cuentas.html")


@app.route("/transferencias")
def transferencias():
    return render_template("transferencias.html")


@app.route("/pagos")
def pagos():
    return render_template("pagos.html")


if __name__ == "__main__":
    app.run(debug=True)