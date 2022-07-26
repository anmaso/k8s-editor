window.SAMPLES = {
  default: {
    values : {
      name      : 'nginx',
      image     : 'docker.io/nginx',
      replicas  : 1,
      imagePullSecrets: 'my-namespace-secret-for-pulling-image',
      envs      : [{name:'name1', value:'value1'}],
      envconfig : false,
      envsecret : false,
      request   : {cpu:'100m', ram:'128Mi'},
      limit     : {cpu:'1000m', ram:'256Mi'},
      volume1   : 'volume1',
      config1   : 'config1',
      subpath   : false,
      path1     : '/etc/nginx/conf.d/default.conf',
      file1     : 'default.conf',
      cmd       : '"/bin/bash", "-c", "--"',
      args      : '"while true; do sleep 30; done;"',
      port      : 80,
      targetPort: 8080,
      serviceType: 'ClusterIP',
      digest    : '',
      configdata: '',
      ingressPath: '/nginx',
      secret1   : 'secret1',
      secretpath1: '/var/secrets/secret1',
      secretfile1: 'secret1',
      empty1    : 'emptydir1',
      emptypath1: '~/.config'
    },
    section: {
      replicas  : false,
      imagePullSecrets: false,
      ports     : false,
      probes    : false,
      resources : false,
      volume1   : false,
      cmd       : false,
      envs      : false,
      service   : false,
      kustomize : false,
      config    : false,
      ingress   : false,
      secret1   : false,
      emtpy1    : false
    }
  },
  complete: {
    values : {
      name      : 'myapp',
      image     : 'eu.gcr.io/project/image:version',
      replicas  : 1,
      imagePullSecrets: 'my-namespace-secret-for-pulling-image',
      envs      : [{name:'name1', value:'value1'}],
      request   : {cpu:'100m', ram:'128Mi'},
      limit     : {cpu:'1000m', ram:'256Mi'},
      volume1   : 'volume1',
      config1   : 'config1',
      path1     : 'path1',
      file1     : 'file1',
      cmd       : '"/bin/bash", "-c", "--"',
      args      : '"while true; do sleep 30; done;"',
      port      : 80,
      targetPort: 8080,
      serviceType: 'ClusterIP',
      digest    : '',
      configdata: '',
      ingressPath: '',
      secret1   : 'secret1',
      secretpath1: '/var/secrets/secret1',
      secretfile1: 'secret1'
    },
    section: {
      replicas  : true,
      imagePullSecrets: true,
      ports     : true,
      resources : true,
      volume1   : true,
      probes    : true,
      cmd       : true,
      envs      : true,
      envconfig : true,
      envsecret : true,
      service   : true,
      kustomize : true,
      config    : true,
      ingress   : true,
      secret1   : true,
      subpath   : true,
      empty     : true,
      secret    : true
    }
  },
  nginx: {
    values : {
      name      : 'nginx',
      image     : 'docker.io/nginx',
      replicas  : 1,
      imagePullSecrets: '',
      envs      : [{name:'name1', value:'value1'}],
      request   : {cpu:'100m', ram:'32Mi'},
      limit     : {cpu:'100m', ram:'128Mi'},
      volume1   : 'volume1',
      config1   : 'config1',
      path1     : '/etc/nginx/conf.d/default.conf',
      file1     : 'default.conf',
      cmd       : '"/bin/bash", "-c", "--"',
      args      : '"while true; do sleep 30; done;"',
      port      : 80,
      targetPort: 80,
      serviceType: 'ClusterIP',
      digest    : '',
      configdata: `server {
    listen       80;
    server_name  localhost;

    index index.html;

    location / {
        root   /usr/share/nginx/html;
    }
}`,
      ingressPath: '/nginx',
      secret1   : 'secret1',
      secretpath1: '/var/secrets/secret1',
      secretfile1: 'secret1'
    },
    section: {
      replicas  : true,
      imagePullSecrets: false,
      ports     : false,
      resources : false,
      volume1   : true,
      subpath   : true,
      cmd       : false,
      envs      : false,
      service   : true,
      kustomize : false,
      config    : true,
      ingress   : false
    }
  },
  nodejs: {
    values : {
      name      : 'nodejs-http-server',
      image     : 'node',
      replicas  : 1,
      imagePullSecrets: '',
      envs      : [{name:'PORT', value:'"3000"'}],
      request   : {cpu:'100m', ram:'32Mi'},
      limit     : {cpu:'100m', ram:'128Mi'},
      volume1   : 'nodejs-http-server',
      config1   : 'nodejs-http-server',
      path1     : '/index.js',
      file1     : 'default.conf',
      cmd       : '"node", "/index.js"',
      args      : '',
      port      : 80,
      targetPort: 3000,
      serviceType: 'ClusterIP',
      digest    : '',
      configdata: `const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log('Server running at http://'+hostname+':'+port);
});`,
      ingressPath: '/nodejs-http-server',
      secret1   : 'secret1',
      secretpath1: '/var/secrets/secret1',
      secretfile1: 'secret1'
    },
    section: {
      replicas  : false,
      imagePullSecrets: false,
      ports     : false,
      resources : false,
      volume1   : true,
      subpath   : true,
      cmd       : true,
      envs      : true,
      service   : true,
      kustomize : false,
      config    : true,
      ingress   : false
    }
  },
  
  postgres13: {
    values : {
      name      : 'postgres',
      image     : 'postgres:13',
      replicas  : 1,
      imagePullSecrets: '',
      envs      : [{name:'POSTGRES_DB', value:'postgres'},{name:'POSTGRES_USER', value:'postgres'},{name:'POSTGRES_PASSWORD', value:'postgres'}],
      request   : {cpu:'1', ram:'256Mi'},
      limit     : {cpu:'1', ram:'512Mi'},
      volume1   : 'volume1',
      config1   : 'config1',
      path1     : '/var/lib/pgsql/data/postgresql.conf',
      file1     : 'postgresql.conf',
      cmd       : '"/bin/bash", "-c", "--"',
      args      : '"while true; do sleep 30; done;"',
      port      : 5432,
      targetPort: 5432,
      serviceType: 'ClusterIP',
      digest    : '',
      configdata: ``,
      ingressPath: '/postgres',
      secret1   : 'secret1',
      secretpath1: '/var/secrets/secret1',
      secretfile1: 'secret1'
    },
    section: {
      replicas  : true,
      imagePullSecrets: false,
      ports     : false,
      resources : false,
      volume1   : false,
      subpath   : true,
      cmd       : false,
      envs      : true,
      service   : true,
      kustomize : false,
      config    : false,
      ingress   : false
    }
  },
  netshoot: {
    values : {
      name      : 'netshoot',
      image     : 'nicolaka/netshoot',
      replicas  : 1,
      imagePullSecrets: '',
      envs      : [],
      request   : {cpu:'100m', ram:'128Mi'},
      limit     : {cpu:'1', ram:'128Mi'},
      volume1   : 'volume1',
      config1   : 'config1',
      path1     : '',
      file1     : '',
      cmd       : '"/bin/bash", "-c", "--"',
      args      : '"while true; do sleep 30; done;"',
      port      : 5432,
      targetPort: 5432,
      serviceType: 'ClusterIP',
      digest    : '',
      configdata: ``,
      ingressPath: '/postgres',
      secret1   : 'secret1',
      secretpath1: '/var/secrets/secret1',
      secretfile1: 'secret1'
    },
    section: {
      replicas  : false,
      imagePullSecrets: false,
      ports     : false,
      resources : false,
      volume1   : false,
      subpath   : false,
      cmd       : true,
      envs      : false,
      service   : false,
      kustomize : false,
      config    : false,
      ingress   : false
    }
  }
  
}