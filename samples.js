window.SAMPLES = {
  default: {
    values : {
      name      : 'nginx',
      image     : 'docker.io/nginx',
      replicas  : 1,
      imagePullSecrets: 'my-namespace-secret-for-pulling-image',
      envs      : [{name:'name1', value:'value1'}],
      request   : {cpu:'100m', ram:'128Mi'},
      limit     : {cpu:'1000m', ram:'256Mi'},
      volume1   : 'volume1',
      config1   : 'config1',
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
      secretfile1: 'secret1'
    },
    section: {
      replicas  : false,
      imagePullSecrets: false,
      ports     : false,
      resources : false,
      volume1   : false,
      cmd       : false,
      envs      : false,
      service   : false,
      kustomize : false,
      config    : false,
      ingress   : false,
      secret1   : false
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
      cmd       : true,
      envs      : true,
      service   : true,
      kustomize : true,
      config    : true,
      ingress   : true,
      secret1   : true
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
      targetPort: 8080,
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
      cmd       : false,
      envs      : false,
      service   : true,
      kustomize : false,
      config    : true,
      ingress   : true
    }
  }
  
}