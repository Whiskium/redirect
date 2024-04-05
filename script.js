function redirect() {
  let value = document.querySelector('input').value
  if (value.includes('://')) {
    document.querySelector('iframe').setAttribute('src', value)
    value = value.match(/[\w\d\.]+(?=:\/\/)/)
    document.querySelector('.card-info').innerHTML = `正在跳转至 ${value}`
    document.querySelector('.card-option').innerHTML = `取消`
    back()
  }
  else {
    alert('无效链接')
  }
}

function input() {
  document.querySelector('.no-target').style.display = 'none'
  document.querySelector('.redirection').style.display = 'flex'
}

function back() {
  document.querySelector('.no-target').style.display = 'flex'
  document.querySelector('.redirection').style.display = 'none'
}

function redirect_init() {
  let queryString = window.location.search.substring(1);
  if (queryString.includes('://')) {
    document.querySelector('iframe').setAttribute('src', queryString)
    queryString = queryString.match(/[\w\d\.]+(?=:\/\/)/)
    document.querySelector('.card-info').innerHTML = `正在跳转至 ${queryString}`
    document.querySelector('.card-option').innerHTML = `取消`
  }
}

window.onload = function() {
  redirect_init()
  document.querySelector('input').addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      redirect()
    }
  })
}