import http from "./httpService"

export const getDomains = ()=>{
    return http.get("/").then(({data})=>data)
}
export const addDomain = (domain)=>{
    return http.post("/",domain).then(({data})=>data)
}
export const editDomain = ({data,id})=>{
    return http.put(`/${id}`,data).then(({data})=>data)
}
export const deleteDomain = (id)=>{
    return http.delete(`/${id}`).then(({data})=>data)
}