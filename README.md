Quick Start
===================

Create environment

```
$ conda create --name redis_manager
$ source activate redis_manager
(redis_manager)$ conda install flask==0.10.1
(redis_manager)$ conda install requests==2.7.0
(redis_manager)$ conda install -c mlgill react
(redis_manager)$ npm install
```

Start the render server

```
(redis_manager)$ node render_server.js
```

Start the python server

```
(redis_manager)$ python app.py
```

And visit [http://127.0.0.1:5000](http://127.0.0.1:5000)

This project is derived on [basic_rendering](https://github.com/markfinger/python-react/tree/master/examples/basic_rendering) from [python-react](https://github.com/markfinger/python-react/tree/master).