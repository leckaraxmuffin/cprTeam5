import io
import picamera
import cv2
import numpy
anz = 0

#Load a cascade file for detecting faces
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_alt.xml')


while True
        stream = io.BytesIO()
        with picamera.PiCamera() as camera
                camera.resolution = (640, 480)
                camera.capture(stream, format='jpeg')
        buff = numpy.frombuffer(stream.getvalue(), dtype=numpy.uint8)

        image = cv2.imdecode(buff, 1)

        image = cv2.rotate(image, cv2.ROTATE_90_CLOCKWISE)
        image = cv2.rotate(image, cv2.ROTATE_90_CLOCKWISE)

        gray = cv2.cvtColor(image,cv2.COLOR_BGR2GRAY)

        faces = face_cascade.detectMultiScale(gray, 1.1, 5)


        anz+=1
        for (x,y,w,h) in faces
            cv2.rectangle(image,(x,y),(x+w,y+h),(255,255,0),2)
            
        cv2.imshow(show, image)
        cv2.waitKey(100)
        
        lines = ['Readme', 'How to write text files in Python']
with open('readme.txt', 'w') as f:
    for line in lines:
        f.write(line)
        f.write('\n')
        

