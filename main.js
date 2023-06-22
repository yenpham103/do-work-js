const listText = document.querySelector(".list-text")
const textTitles = document.querySelectorAll(".text-title")
const textContents = document.querySelectorAll(".text-content")

textTitles.forEach((textTitle, index) => {
  const textContent = textContents[index]

  textTitle.onclick = function () {
    const removeActiveTitle = document.querySelector(".text-title.active")
    const removeActiveContent = document.querySelector(".text-content.active")
    removeActiveTitle.classList.remove("active")
    removeActiveContent.classList.remove("active")

    //   line.style.left = this.offsetLeft + "px";
    //   line.style.width = this.offsetWidth + "px";

    textTitle.classList.add("active")
    textContent.classList.add("active")
  }
})

// Read-more

document.addEventListener("DOMContentLoaded", function () {
  const readMore = document.querySelector(".read-more")
  const more = document.querySelectorAll(".more")

  readMore.addEventListener("click", function () {
    more.classList.toggle("active")
  })
})
//  slide
$(".slick-slider").slick({
  slidesToShow: 1,
  arrows: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  dots: true,
})
//  Modal
const btnMenu = document.querySelector(".btn-menu")
const modal = document.querySelector(".modal")
const btnClose = document.querySelector(".btn-close")
const modalContent = document.querySelector(".modal-content")

btnMenu.addEventListener("click", () => {
  modal.classList.add("active")
  window.addEventListener("click", (e) => {
     if (e.target == modal) { 
      modal.classList.remove("active")
    }
  })
})
btnClose.addEventListener("click", () => {
  modal.classList.remove("active")
})

// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [
//             '10% Sale and Marketing',
//             '5% Accession and Partnerships',
//             '15% Admin and Partners',
//             '20% Legal and Financial',
//             '55% For IT Development'
//         ],
//         datasets: [{
//             data: [10, 5, 15, 20, 55],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.5)',
//                 'rgba(54, 162, 235, 0.5)',
//                 'rgba(255, 206, 86, 0.5)',
//                 'rgba(75, 192, 192, 0.5)',
//                 'rgba(153, 102, 255, 0.5)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         responsive: true,
//         plugins: {
//             legend: {
//                 display: false  // Tắt hiển thị legend
//             },
//             tooltip: {
//                 callbacks: {
//                     label: function(context) {
//                         var label = context.label || '';
//                         var value = context.parsed || 0;
//                         if (label) {
//                             label += ': ';
//                         }
//                         label += value.toFixed(2) + '%';
//                         return label;
//                     }
//                 }
//             }
//         }
//     }
// });

var ctx = document.getElementById("myChart").getContext("2d")
var myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "10% Sale and Marketing",
      "5% Accession and Partnerships",
      "15% Admin and Partners",
      "20% Legal and Financial",
      "55% For IT Development",
    ],
    datasets: [
      {
        data: [10, 5, 15, 20, 55],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        hoverOffset: 8, // Adds a slight hover effect
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        color: "#fff",
        anchor: "end",
        align: "end",
        formatter: function (value, context) {
          return value + "%"
        },
      },
    },
    animation: {
      duration: 1500, // Animation duration in milliseconds
      easing: "easeInOutQuart", // Easing function for the animation
    },
  },
})
