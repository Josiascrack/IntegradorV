"use strict";(self.webpackChunkapp_IntegradorV=self.webpackChunkapp_IntegradorV||[]).push([[592],{4673:(g,l,o)=>{o.d(l,{e:()=>a});var r=o(4283),s=o(2704),u=o(4263),i=o(6323);let a=(()=>{class n{constructor(t,c){this.http=t,this.router=c}logIn(t){return this.http.post(`${s.Q}/auth/login`,t)}saveToken(t){localStorage.setItem("token",t.accessToken),localStorage.setItem("refreshToken",t.refreshToken)}getTokenPayload(){const t=this.getToken();if(t)return JSON.parse(atob(t.split(".")[1]))}getToken(){return localStorage.getItem("token")||this.logOut()}logOut(){localStorage.removeItem("token"),localStorage.removeItem("refreshToken"),this.router.navigate(["/login"])}getModules(t){return this.http.get(`${s.Q}/users/access/${t}`,{headers:new r.WM({"Content-Type":"application/json"})})}getLoggedUserName(){return this.getTokenPayload().usuario.username}}return n.\u0275fac=function(t){return new(t||n)(u.LFG(r.eN),u.LFG(i.F0))},n.\u0275prov=u.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},4702:(g,l,o)=>{o.d(l,{H:()=>i});var r=o(2704),s=o(4263),u=o(4283);let i=(()=>{class a{constructor(e){this.http=e}getSolicitudesByRuc(e){return this.http.get(`${r.Q}/contribuyente/solicitudes/${e}`)}getSolicitudesByCodigo(e){return this.http.get(`${r.Q}/solicitud/codigo/${e}`)}getSolicitudByCodigoEvaluada(e){return this.http.get(`${r.Q}/solicitud/codigo/${e}/evaluada`)}getSolicitudByCodigoPagada(e){return this.http.get(`${r.Q}/solicitud/codigo/${e}/pagada`)}uploadPagoVoucher(e,t){const c=new FormData;return c.append("voucher",t),this.http.post(`${r.Q}/files/voucher/${e}`,c)}}return a.\u0275fac=function(e){return new(e||a)(s.LFG(u.eN))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);