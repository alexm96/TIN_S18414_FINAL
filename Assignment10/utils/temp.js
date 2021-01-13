//f->c , f->k, c->k
exports.tempMapping={
    "f":{"c":(f)=>{return (f-32)*(5/9)},"k":(f)=>{return (f-32)*(5/9) +273.15}},
    "c":{"f":(c)=>{return (c * 9/5) + 32},"k":(c)=>{return c+273.15}},
    "k":{"c":(k)=>{return k-273.15},"f":(k)=>{return (k-273.15) * 9/5 + 32}}
}