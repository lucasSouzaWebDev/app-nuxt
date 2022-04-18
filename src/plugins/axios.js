export default function ({ $axios, redirect }) {
    $axios.onResponse(response => {
      if (response.status === 200) {
        redirect('/about')
      }
    })
  }