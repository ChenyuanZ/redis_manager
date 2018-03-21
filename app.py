import os
import subprocess
from flask import Flask, render_template, request, redirect
from react.render import render_component

DEBUG = True

app = Flask(__name__)
app.debug = DEBUG

instances = []
path = "/Users/chenyuan/tools/redis-4.0.1/src/redis-server"


@app.route('/')
def index():
    rendered = render_component(
        os.path.join(os.getcwd(), 'static', 'js', 'RedisManager.jsx'),
        {
            'instances': instances,
            'start_instance_url': '/start_instance/',
            'set_path_url': '/set_path/',
            'path': path,
        },
        to_static_markup=True,
    )

    return render_template('index.html', rendered=rendered)


@app.route('/start_instance/', methods=('POST',))
def start_instance():
    port = request.form['port']
    password = request.form['password']
    redis_config = "redis.config.%d" % len(instances)

    with open(redis_config, "w+") as fh:
        fh.write("port %s\n" % port)
        fh.write("daemonize yes\n")
        if not password == "":
            fh.write("requirepass %s\n" % password)

    process = subprocess.Popen([path, redis_config], stdout=subprocess.PIPE)
    output, error = process.communicate()
    print(output)
    print(error)

    instances.append({
        'port': port,
        'password': password,
    })
    return redirect('/')


@app.route('/set_path/', methods=('POST',))
def set_path():
    global path
    path = request.form['path']

    return redirect('/')


if __name__ == '__main__':
    app.run()
