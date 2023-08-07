import smtplib, threading
from dotenv import dotenv_values
from flask_cors import CORS
import flask

conf = dotenv_values(".env")
app = flask.Flask(__name__)
CORS(app, origins=[conf['DEV_URL'],conf['WEB_URL']])

class SendEmailRequest:
  def __init__(self):
    self.emailme = "I couldn't deliver your message.\nPlease email me instead at aperearojas@college.harvard.edu :)"
    self.msgsent = 'your message has been sent!'
    self.success = False

  def send_email(self, name, email, message):

    to_ale = ("Subject: 'message thru personal website'\n\n"
           +f"Name: {name}\n"
           +f"Email: {email}\n\n"
           +f"Message: {message}")

    to_client = ("Subject: 'Message to Alejandra'\n\n"
             +"Your message has been sent! I will get back to you shortly.\n\n"
             +"If you did not contact me through https://www.alejandraprj.com, "
             +"someone must have used your email to send a message. "
             +"If that's the case, I apologize for the inconvenience, "
             +"and please let me know if this happens again.\n\n"
             +"You may contact me through aperearojas@college.harvard.edu. "
             +"Have an awesome day!\n\n"
             +"Best Regards,\nAlejandra Perea Rojas")

    s = smtplib.SMTP(conf['Mail'], conf['Port'], timeout=5)

    try:
      s.starttls()
      s.login(conf['Account'], conf['Password'])
      s.sendmail(conf['Account'], conf['Account'], to_ale)
      s.sendmail(conf['Account'], email, to_client)
    except Exception as ex:
      print(ex)
      self.success = False
    s.quit()
    self.success = True

  def start_send_email(
      self,
      name="John Doe",
      email="alecita9perea@gmail.com",
      message="No message."
    ):

    # send email in the background
    thread = threading.Thread(target=self.send_email, args=(name, email, message))
    thread.daemon = True
    thread.start()
    # synchronize (10 sec max)
    thread.join(timeout=10)

    status = self.msgsent if self.success else self.emailme
    return flask.jsonify({'status': status, 'success': self.success})

@app.route('/send', methods=['POST'])
def handle():
    req = SendEmailRequest()
    return req.start_send_email(
        name=flask.request.form['name'],
        email=flask.request.form['email'],
        message=flask.request.form['message'])

@app.route('/')
def hello():
    return "hello from "+conf['WEB_URL']+"!"
