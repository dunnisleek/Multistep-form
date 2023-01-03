const app = Vue.createApp({
       data(){
              return{
                 currentStep: 0, // 2, 3,4
                 toggle:true
              }
       },
       methods:{
              display (val){
                     this.currentStep = val
              },
              toggleDisplay(){
                     this.toggle = !this.toggleDisplay
              }
     
      
       }
})
app.mount('#app')
