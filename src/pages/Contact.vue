<template>
  <Layout>
    <header
      class="masthead"
      :style="{'background-image': `url(http://101.35.2.170:1337${$page.allStrapiInfo.edges[0].node.contactBgc.url})`}"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>Contact Me</h1>
              <span class="subheading">Have question? I have answers.</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <p>
              Want to get in touch? Fill out the form below to send me a message
              and I will get back to you as soon as possible!
            </p>
            <div class="my-5">
              <!-- * * * * * * * * * * * * * * *-->
              <!-- * * SB Forms Contact Form * *-->
              <!-- * * * * * * * * * * * * * * *-->
              <!-- This form is pre-integrated with SB Forms.-->
              <!-- To make this form functional, sign up at-->
              <!-- https://startbootstrap.com/solution/contact-forms-->
              <!-- to get an API token!-->
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    data-sb-validations="required"
                    v-model="form.name"
                  />
                  <label for="name">Name</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="email"
                    type="email"
                    placeholder="Enter your email..."
                    data-sb-validations="required,email"
                    v-model="form.email"
                  />
                  <label for="email">Email address</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div class="invalid-feedback" data-sb-feedback="email:email">
                    Email is not valid.
                  </div>
                </div>
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number..."
                    data-sb-validations="required"
                    v-model="form.phone"
                  />
                  <label for="phone">Phone Number</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    A phone number is required.
                  </div>
                </div>
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    id="message"
                    placeholder="Enter your message here..."
                    style="height: 12rem"
                    data-sb-validations="required"
                    v-model="form.message"
                  ></textarea>
                  <label for="message">Message</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    A message is required.
                  </div>
                </div>
                <br />
                <!-- Submit success message-->
                <!---->
                <!-- This is what your users will see when the form-->
                <!-- has successfully submitted-->
                <div class="d-none" id="submitSuccessMessage">
                  <div class="text-center mb-3">
                    <div class="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms"
                      >https://startbootstrap.com/solution/contact-forms</a
                    >
                  </div>
                </div>
                <!-- Submit error message-->
                <!---->
                <!-- This is what your users will see when there is-->
                <!-- an error submitting the form-->
                <div class="d-none" id="submitErrorMessage">
                  <div class="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>
                <!-- Submit Button-->
                <button
                  class="btn btn-primary text-uppercase"
                  id="submitButton"
                  type="button"
                  @click="handleSubmit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<page-query>
query {
  allStrapiInfo {
    edges {
      node {
        title
        description
        contactBgc {
          url
        }
      }
    }
  }
}
</page-query>

<script>
import axios from 'axios'
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    isEmpty(val) {
      return val === ''
    },
    async handleSubmit() {
      let valid = true
      for (let key in this.form) {
        if (this.isEmpty(this.form[key])) {
          window.alert(`${key}不能为空~`)
          valid = false
          return
        }
      }
      if (!valid) {
        return
      }
      let regEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
      if (!regEmail.test(this.form.email)) {
        window.alert(`邮箱格式不正确~`)
        return
      }
      let regPhone = /^[1][3,4,5,7,8,9][0-9]{9}$/
      if (!regPhone.test(this.form.phone)) {
        window.alert(`手机号格式不正确~`)
        return
      }
      console.log(this.form)
      try {
        await axios({
          method: 'post',
          url: 'http://101.35.2.170:1337/contacts',
          data: this.form
        })
        window.alert('发送成功~')
        this.form = {
          name: '',
          email: '',
          phone: '',
          message: ''
        }
      } catch (err) {
        window.alert('发送失败~')
      }
    }
  }
};
</script>

<style></style>
