import smtplib, threading
from dotenv import dotenv_values
from flask_cors import CORS
import flask

conf = dotenv_values(".env")
app = flask.Flask(__name__)
CORS(app, origins=[conf['DEV_URL'],conf['WEB_URL']])

class SendEmailRequest:
  def __init__(self):
    self.emailme = 'something went wrong! \nplease email me instead!'
    self.msgsent = 'your message has been sent!'
    self.success = False

  def send_email(self, n, e, m):
    
    body = (f"Subject: {'message thru alejandraprj.com'}\n\n"
           +f"Name: {n}\n"
           +f"Email: {e}\n"
           +f"Message: {m}")
    
    client = f"Subject: {'Message to Alejandra'}\n\n"+"Your message has been sent! I will get back to you shortly."

    acc = conf['Account']
    s = smtplib.SMTP(conf['Mail'], conf['Port'], timeout=5)

    try:
      s.starttls()
      s.login(acc, conf['Password'])
      s.sendmail(acc, acc, body)
      s.sendmail(acc, e, client)
      s.quit()
      self.success = True

    except Exception:
      self.success = False

  def main_task(self, name, email, message):

    # send email is in the background&
    thread = threading.Thread(target=self.send_email, args=(name, email, message))
    thread.daemon = True
    thread.start()
    # synchronize (additional 10 sec max)
    thread.join(timeout=10)

    status = self.msgsent if self.success else self.emailme
    response = flask.jsonify({'status': status, 'success': self.success})
    # response.headers['Access-Control-Allow-Origin'] = 'https://www.alejandraprj.com'
    return response

@app.route('/send', methods=['POST'])
def handle():
    req = SendEmailRequest()
    name = flask.request.form['name']
    email = flask.request.form['email']
    message = flask.request.form['message']
    return req.main_task(name, email, message)

@app.route('/')
def hello():
    return "hello from "+conf['WEB_URL']+"!"
