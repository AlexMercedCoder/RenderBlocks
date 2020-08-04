const app = new RenderBlock({
target: "#app",
render: (block) => {
    return `<h1>${block.info.hello}</h1>`
},
info: {hello: "Hello World"},
methods: {
    test: function(block){
        console.log(block)
    },
    update: (block) => block.updateInfo('hello', 'goodbye world')
},
initialBefore: (block) => console.log('initial before'),
initialAfter: (block) => console.log('initial after'),
before: (block) => console.log('before'),
after: (block) => console.log('after'),

})

console.log(app.target)
app.useMethod('update')