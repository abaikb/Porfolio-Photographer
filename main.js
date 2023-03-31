const pics = [
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80',
    'https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
    'https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
  ]

  const gallery = document.querySelector('.portfolio')
  const imageBox = document.createElement('div')
  gallery.append(imageBox)

  pics.forEach(pic => {
    const img = document.createElement('img')
    img.src = pic
    imageBox.appendChild(img)
    img.classList.add('img-item')
    imageBox.classList.add('image-box')
    const imgWrapper = document.createElement("div")
    img.src = pic;
    imgWrapper.classList.add("imgWrapper")
    imgWrapper.appendChild(img)
    imageBox.appendChild(imgWrapper)
    img.classList.add("img-item")
  
  })


  const btn = document.querySelector('.open')
  const container = document.querySelector('.form-conteiner')
  const closeform = document.querySelector('.close')

  btn.addEventListener('click' , (e) => {
    e.preventDefault()
     container.style.display = 'block'
  })

  closeform.addEventListener('click' , (e) => {
    e.preventDefault()
     container.style.display = 'none'
  })

const form = document.querySelector('form')
const button = form.querySelector('.button-contact')

const user = {}
button.addEventListener('click', (event) => {
  event.preventDefault()
  
  user.name = form.elements.name.value
  user.email = form.elements.email.value
  user.message = form.elements.text.value

  console.log(user)
  container.style.display = 'none'
  form.reset()
})



const imgBoxes = document.querySelectorAll('.img-item')
for (let i = 0; i < imgBoxes.length; i++) {
  imgBoxes[i].addEventListener('click', function() {

    const modal = document.createElement('div')
    modal.classList.add('image-zoom')

    const modalImg = document.createElement('img')
    modalImg.setAttribute('src', this.getAttribute('src'))

    modalImg.style.width = '57%'
    modalImg.style.height = '80%'
    modalImg.style.objectFit = 'cover'

    const closeBtn = document.createElement('button')
    closeBtn.classList.add('close-btn')
    closeBtn.textContent = 'close'
    closeBtn.style.width = '106px'
    closeBtn.style.height = '38px'

    closeBtn.addEventListener('click', function() {
      modal.remove()
    })
    modal.appendChild(closeBtn)
    modal.appendChild(modalImg)
    document.body.appendChild(modal)
  })
}

  
