const btn = document.querySelector('button')
const output = document.querySelector('#output')

btn.addEventListener('click', getQuote)
function getQuote() {
  const xhr = new XMLHttpRequest()
  const url = 'https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand'
  xhr.onreadystatechange = function () {
    // console.log(xhr.readyState);
    if (xhr.readyState == 4 && xhr.status == 200) {
      // console.log(xhr.responseText);
      let str = xhr.responseText
      let obj = JSON.parse(str)
      //   console.log(obj['3']['content'])

      obj.forEach((arrayItem) => {
        let x = arrayItem.content
        // console.log(x)

        let str1 = x['rendered']

        console.log(str1)

        // str1 = x.slice(13, -22)
        output.innerHTML = str1
      })
    } else {
      output.innerHTML = 'Error'
    }
  }
  xhr.open('GET', url)
  xhr.send()
  // console.log(xhr);

  xhr.addEventListener('progress', callBackfn)
  xhr.addEventListener('load', callBackfn)
  xhr.addEventListener('error', callBackfn)
}

function callBackfn(e) {
  console.log(e)
}
