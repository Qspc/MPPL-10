<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>

    {{-- template bootstrap --}}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <link rel="stylesheet" type="text/css" href="/style/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="/style/css/fontawesome-all.min.css">
    <link rel="stylesheet" type="text/css" href="/style/css/iofrm-style.css">
    <link rel="stylesheet" type="text/css" href="/style/css/iofrm-theme12.css">
</head>
<body>
    <div class="form-body">
        <div class="row">
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <div class="website-logo-inside">
                            <a href="index.html">
                                {{-- <img class="logo-size" class="img-thumbnail" src="style/images/logo.png" alt="" style="width: 200px"> --}}
                                <p class="fw-bold" style="
                                font-family: Poppins;
                                font-weight: 600;
                                font-size: 48px;
                                display: flex;
                                align-items: center;
                                text-align: center;
                                color: #FFFFFF;
                                ">Minjemin<span style="color: #5DEC96">.</span></p>
                            </a>
                        </div>
                        {{-- <h3>Get more things done with Loggin platform.</h3>
                        <p>Access to the most powerfull tool in the entire design and web industry.</p> --}}
                        <div class="page-links">
                            <a href="login12.html" class="active">Masuk</a>
                        </div>
                        <form>
                            @csrf
                            <input class="form-control" type="text" name="username" placeholder="E-mail Address" required>
                            <input class="form-control" type="password" name="password" placeholder="Password" required>
                            <div class="form-button">
                                <button id="submit" type="submit" class="ibtn">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
<script src="js/jquery.min.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/main.js"></script>
</body>
</html>