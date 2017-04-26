import foo from './foo'

const bar = async () => {
  const result = await foo()
  console.log(result)
}

bar()
