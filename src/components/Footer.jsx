import React from 'react'

const Footer = () => {
  return (
    <div> <section class="py-5 bg-light">
    <div class="container text-center">
      <a>
         🌍
      </a>

      <p class="text-muted">&copy; 2025 TravelX . All rights reserved.</p>
    </div>
    <div class="d-flex justify-content-center align-items-center border-secondary pt-3 pb-1">
      <ul class="list-unstyled d-flex mb-0 align-items-center">
        <li class="mx-2">
          <a class="text-dark" href="https://instagram.com" target="_blank"><i class="fab fa-instagram fa-lg"></i></a>
        </li>
        <li class="mx-2">
          <a class="text-secondary" href="https://facebook.com" target="_blank"><i
              class="fab fa-facebook-f fa-lg"></i></a>
        </li>
        <li class="mx-2">
          <a class="text-dark" href="https://tiktok.com" target="_blank"><i class="fab fa-tiktok fa-lg"></i></a>
        </li>
        <li class="mx-2">
          <a class="text-secondary" href="https://youtube.com" target="_blank"><i class="fab fa-youtube fa-lg"></i></a>
        </li>
      </ul>
    </div>

  </section></div>
  )
}

export default Footer