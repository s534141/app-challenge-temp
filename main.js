const add = (x, y) => { return x + y }

const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity()
  if (isValid) {
    event.target.nextElementSibling.innerHTML = ''
  } else {
    event.target.nextElementSibling.innerHTML = 'Invalid input'
    event.target.focus()
  }
}

const updateWithCTemp = async (event) => {
  document.querySelector('#result').innerHTML = ''
  const t1 = parseInt(document.querySelector('#tempK').value)
  const tempC = (t1-273.15)
  const ans = `The temperature in Celcius is ${tempC} degrees`
  document.querySelector('#tempC').innerHTML = ans
}

// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'clicker') { updateWithMinString(event) }
})