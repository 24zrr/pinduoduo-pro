export function Emoji() {
    return (target: object, key: string) => {
        let val = target[key]

        const getter = ()=>{
            return val
        }
        const setter = (value)=>{
            val = `😂 ${value} 😂`
        }
        Object.defineProperty(target,key,{
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        })

    }
}