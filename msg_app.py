import smtplib, threading
from dotenv import dotenv_values
from flask_cors import CORS
import flask

conf = dotenv_values(".env")

app = flask.Flask(__name__)

class SendEmailRequest:
  def __init__(self):
    self.emailme = 'something went wrong! \nplease email me instead! \nthank you :)'
    self.msgsent = 'your message has been sent!'
    self.success = False

  # TODO send email to client too ..
  def send_email(self, m):
    acc = conf['Account']
    s = smtplib.SMTP(conf['Mail'], conf['Port'], timeout=5)
    try:
      s.starttls()
      s.login(acc, conf['Password'])
      s.sendmail(acc, acc, m)
      s.quit()
      self.success = True

    except Exception:
      self.success = False

  def main_task(self, msg):

    # send email is in the background&
    thread = threading.Thread(target=self.send_email, args=(msg,))
    thread.daemon = True
    thread.start()
    # synchronize (additional 10 sec max)
    thread.join(timeout=10)

    status = self.msgsent if self.success else self.emailme
    return flask.jsonify({'status': status})

@app.route('/send', methods=['POST'])
def handle():
    CORS(app, origins=[conf['DEV_URL'], conf['WEB_URL']])
    req = SendEmailRequest()
    msg = (f"Subject: {'message through alejandraprj.com'}\n\n"
        +f"Name: {flask.request.form['name']}\n"
        +f"Email: {flask.request.form['email']}\n"
        +f"Message: {flask.request.form['message']}")
    return req.main_task(msg)

@app.route('/')
def hello():
    return "hello from "+conf['WEB_URL']+"!"