 const copyToClipboard = str => {
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      };

const CLIP="https://myclip.glitch.me/";

const id = (id)=>document.getElementById(id);
const getPres = (cls)=> (cls ? Array.from(document.getElementsByClassName(cls)) : Array.from(document.getElementsByTagName('pre')));
const getText = (cls)=> getPres(cls).reduce( (acc,el)=>acc+el.innerText+'\n', "").replaceAll('-+','')






const App = {
  
  
  setup(){
    const Vue = window.Vue;
    var init_values, init_section;
    const clear = ()=> {
      localStorage.removeItem('values');
      localStorage.removeItem('section');
    }
    try{
      init_values=JSON.parse(localStorage.getItem('values'));
      init_section=JSON.parse(localStorage.getItem('section'));
    }catch(e){
      console.log('nothing to load from local storage')
      clear();
    }
    try{
      const load=document.location.search.replace('?','').split('=')[1];
      console.log("load",load)
      init_values=window.SAMPLES[load].values;
      init_section=window.SAMPLES[load].section;
    }catch(e){}
    
    
    const values  = Vue.ref(init_values  || window.SAMPLES.default.values);
    const section = Vue.ref(init_section || window.SAMPLES.default.section);
 
    const cpu_values = ['100m', '200m', '500m', '1000m'];
    const ram_values = ['128Mi', '256Mi', '512Mi', '1024Mi'];
    const plus = (arr,v)=>arr[arr.indexOf(v)+1];
    const minus = (arr,v)=>arr[arr.indexOf(v)+1];
    const request_cpu_plus = ()=> values.value.request.cpu=plus(cpu_values, values.value.request.cpu);
    const request_cpu_minus = ()=> values.value.request.cpu=minus(cpu_values, values.value.request.cpu);
    const request_ram_plus = ()=> values.value.request.ram=plus(ram_values, values.value.request.ram);
    const request_ram_minus = ()=> values.value.request.ram=minus(ram_values, values.value.request.ram);
    const limit_cpu_plus = ()=> values.value.limit.cpu=plus(cpu_values, values.value.limit.cpu);
    const limit_cpu_minus = ()=> values.value.limit.cpu=minus(cpu_values, values.value.limit.cpu);
    const limit_ram_plus = ()=> values.value.limit.ram=plus(ram_values, values.value.limit.ram);
    const limit_ram_minus = ()=> values.value.limit.ram=minus(ram_values, values.value.limit.ram);
    
    const type = ['ClusterIP', 'NodePort', 'LoadBalancer'];
    const type_plus = ()=> values.value.serviceType=plus(type, values.value.serviceType);
    const type_minus = ()=> values.value.serviceType=minus(type, values.value.serviceType);
    
    const copyDeployment = ()=> copyToClipboard(getText())
    const blob = (text)=>new Blob([text], {type: "text/plain;charset=utf-8"});
    
    const deploymentName = ()=>values.value.name+'-deployment.yaml';
    const serviceName = ()=>values.value.name+'-service.yaml';
    
    const prefixLines = (str)=> str?str.split('\n').map(l=>'    '+l).join('\n'):'';
    
    const computedConfig = Vue.computed(()=> prefixLines(values.value.configdata));
        
    const computedName = Vue.computed(()=> values.value.name+'xxxx');
        
    const saveDeployment = ()=> saveAs( blob(getText('deployment')), values.value.name+'-deployment.yaml');
    const saveService = ()=> saveAs( blob(getText('service')), values.value.name+'-service.yaml');
    const saveKustomize = ()=> saveAs( blob(getText('kustomize')), 'kustomization.yaml');
    const saveConfig = ()=> saveAs( blob((getText('config'))), values.value.name+'-external-config.yaml');
    const saveIngress = ()=> saveAs( blob((getText('ingress'))), values.value.name+'-ingress.yaml');
    
    const addEnvs = ()=> values.value.envs.push({name:'name', value:'value'})
    const removeEnvs = ()=> (values.value.envs.length>1) && values.value.envs.pop();
    
    const save = ()=>{
      localStorage.setItem('values', JSON.stringify(values.value));
      localStorage.setItem('section', JSON.stringify(section.value));
    }
    
    const load = (name)=>document.location=document.location.origin+'?load='+name;
    
    const showEditor = Vue.ref(true);
    const fullDescriptor = Vue.ref("??");
    const toggleEditor = ()=> {
      showEditor.value = !showEditor.value;
      fullDescriptor.value = getText();
    }
    
    const clip = Vue.ref("");
    const clipDeployment = ()=> {
      var chars= ['|','/','-','\\','|','-'];
      var tmo=setInterval(()=>{
        chars.push( chars.shift());
        clip.value=chars[0];
      },200)
      const txt = getText();
      fetch(CLIP,{
        method: 'post',
        mode: 'cors',
        body: txt,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).then(r=>r.text()).then(t=>{
        try{
          var url=t.split('\n').filter(s=>s.indexOf('myclip')>0)[0].replace(/[^/]*\//g,'');
          copyToClipboard(CLIP+url)
          clearInterval(tmo);
          clip.value=url;
        }catch(e){
          clip.value='??err'
        }
      }).finally(()=>{
        clearInterval(tmo);
      })
    }
    
    const copyKubectl = ()=> copyToClipboard("curl "+CLIP+clip.value+ " | kubectl apply -f -")
    
    
    return {
      toggleEditor,
      fullDescriptor,
      showEditor,
      copyDeployment,
      
      clip,
      clipDeployment,
      copyKubectl,
      
      saveDeployment,
      saveService,
      saveConfig,
      saveKustomize,
      saveIngress,
     
      request_cpu_plus,
      request_cpu_minus,
      request_ram_plus,
      request_ram_minus,
      limit_cpu_plus,
      limit_cpu_minus,
      
      limit_ram_plus,
      limit_ram_minus,
  
      type_plus,
      type_minus,
      addEnvs,
      removeEnvs,
      section,
      values,
      save,
      clear,
      load,
      computedConfig,
      computedName
    }
  }
}
const app=window.Vue.createApp(App)

app.directive('focus', {
  // When the bound element is mounted into the DOM...
  mounted(el) {
    // Focus the element
    el.focus()
  }
});
app.mount("#vue");