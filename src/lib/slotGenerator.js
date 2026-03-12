export function generateSlots(open, close){

 const slots = []

 let start = new Date(`1970-01-01T${open}:00`)
 let end = new Date(`1970-01-01T${close}:00`)

 while(start < end){

  let hours = start.getHours().toString().padStart(2,"0")
  let minutes = start.getMinutes().toString().padStart(2,"0")

  slots.push(`${hours}:${minutes}`)

  start.setMinutes(start.getMinutes()+30)

 }

 return slots

}