"use strict";(self.webpackChunkapp_IntegradorV=self.webpackChunkapp_IntegradorV||[]).push([[706],{5706:(b,a,i)=>{i.r(a),i.d(a,{LoginModule:()=>f});var m=i(6571),u=i(6323),n=i(3348),e=i(4263),g=i(4673),d=i(2610);const c=[{path:"",component:(()=>{class o{constructor(t,r,l){this.router=t,this.loginService=r,this.toastr=l,this.loginForm=new n.nJ({username:new n.p4("",[n.kI.required]),password:new n.p4("",[n.kI.required])}),this.isVisible=!1}ngOnInit(){}onSubmit(){this.loginForm.disable(),this.loginService.logIn(this.loginForm.value).subscribe(t=>{this.loginService.saveToken(t),this.router.navigate(["/admin"])},t=>{this.toastr.error(t.error.message,"Error"),this.loginForm.enable(),this.loginForm.reset(),console.log(t.error.message)})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u.F0),e.Y36(g.e),e.Y36(d._W))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],decls:20,vars:3,consts:[[2,"background-image","url(./assets/img/usuari.jpg)","width","100vw","height","100vh","background-size","cover","background-repeat","no-repeat"],[1,"h-screen","w-screen","flex","items-center","justify-end","pr-48"],[1,"w-96","rounded-lg","text-black",2,"background-color","#0167a7"],[1,"relative","pt-16","pb-4","px-8"],[1,"w-full","flex","justify-center"],["src","./assets/img/logomunicipalidad.png","alt","logo",1,"absolute","-top-16","w-32"],[1,"text-center"],[1,"mt-1","mb-4","pb-1","text-lg","font-bold",2,"color","white"],[3,"formGroup","ngSubmit"],[1,"form-outline","mb-4"],["type","email","id","username","formControlName","username","placeholder","Nombre de usuario",1,"form-control"],["for","form2Example11",1,"form-label"],[1,"form-outline","mb-4","relative","flex","flex-row","items-center"],["id","password","formControlName","password","placeholder","Contrase\xf1a",1,"form-control",3,"type"],["type","button",1,"absolute","right-2",3,"click"],[1,"fa-solid",3,"ngClass"],["type","submit",1,"btn","btn-success","btn-block","fa-lg"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"img",5),e.qZA(),e.TgZ(6,"div",6)(7,"h4",7),e._uU(8," Iniciar Sesi\xf3n "),e.qZA()(),e.TgZ(9,"form",8),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(10,"div",9),e._UZ(11,"input",10)(12,"label",11),e.qZA(),e.TgZ(13,"div",12),e._UZ(14,"input",13),e.TgZ(15,"button",14),e.NdJ("click",function(){return r.isVisible=!r.isVisible}),e._UZ(16,"i",15),e.qZA()(),e.TgZ(17,"div",6)(18,"button",16),e._uU(19," Iniciar "),e.qZA()()()()()()()),2&t&&(e.xp6(9),e.Q6J("formGroup",r.loginForm),e.xp6(5),e.Q6J("type",r.isVisible?"text":"password"),e.xp6(2),e.Q6J("ngClass",r.isVisible?"fa-eye-slash":"fa-eye"))},dependencies:[m.mk,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u],styles:["@media (min-width: 768px){.gradient-form[_ngcontent-%COMP%]{height:100vh!important}}@media (min-width: 769px){.gradient-custom-2[_ngcontent-%COMP%]{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}}"]}),o})()}];let p=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.Bz.forChild(c)]}),o})(),f=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.ez,n.u5,n.UX,p]}),o})()}}]);