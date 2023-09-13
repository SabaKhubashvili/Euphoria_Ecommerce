import localFont from "next/font/local";



export const Oswald = localFont({
    src:[
      {
        path:'../../../public/static/Oswald-ExtraLight.ttf',
        weight:'200'
      },
      {
        path:'../../../public/static/Oswald-Light.ttf',
        weight:'300'
      },
      {
        path:'../../../public/static/Oswald-Regular.ttf',
        weight:'400'
      },
      {
        path:'../../../public/static/Oswald-Medium.ttf',
        weight:'500'
      },
      {
        path:'../../../public/static/Oswald-SemiBold.ttf',
        weight:'600'
      },
      {
        path:'../../../public/static/Oswald-Bold.ttf',
        weight:'700'
      },
    ]
  })
export const Roboto = localFont({
    src:[
        {
            path:'../../../public/static/Roboto-Light.ttf',
            weight:'300'
          },
          {
            path:'../../../public/static/Roboto-Regular.ttf',
            weight:'400'
          },
          {
            path:'../../../public/static/Roboto-Medium.ttf',
            weight:'500'
          },
          {
            path:'../../../public/static/Roboto-Bold.ttf',
            weight:'700'
          },
    ]
  })
  