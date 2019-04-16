export default ({markup, css}) => {
  return `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
        <title style="font-family:Pacifico;">Blizzmate</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <style>
            a{
              text-decoration: none
            }
        </style>
        <style>
          @import url('https://fonts.googleapis.com/css?family=Pacifico');
        </style>
      </head>
      <body style="margin:0">
        <div id="root">${markup}</div>
        <style id="jss-server-side">${css}</style>
        <script type="text/javascript" src="/dist/bundle.js"></script>
      </body>
    </html>`
}