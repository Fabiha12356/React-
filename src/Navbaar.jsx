import React from 'react'

export const Navbaar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid px-5">
      <a class="navbar-brand" href="#">
        <img src="" alt="img" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse gap-5 text-center" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 nav ">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">About US</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-disabled="true">Use Cases</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-disabled="true">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-disabled="true">Blog</a>
          </li>
        </ul>
        <div>
          <button class="btn line" type="submit">Request a quote</button>
        </div>
      </div>
    </div>
  </nav>
  )
}
