var navbar = (function () {
    var headerNavTemplate = `
    <header class="header dark-bg">
        <div class="toggle-nav">
            <div class="icon-reorder tooltips"
                data-original-title="Toggle Navigation" data-placement="bottom">
                <i class="fas fa-align-justify"></i>
            </div>
        </div>

        <!--logo start-->
        <a href="admin/index.html" class="logo">Admin<span class="lite">Deshboard</span></a>
        <!--logo end-->

        <div class="nav search-row" id="top_menu">
            <!--  search form start -->
            <ul class="nav top-menu">
                <li>
                    <form class="navbar-form">
                        <input class="form-control" placeholder="Search" type="text">
                    </form>
                </li>
            </ul>
            <!--  search form end -->
        </div>

        <div class="top-nav notification-row">
            <ul class="nav pull-right top-menu">
                <!-- user login dropdown start-->
                <li class="dropdown"><a data-toggle="dropdown"
                    class="dropdown-toggle" href="#"> <span class="profile-ava">
                            <img alt="" src="/admin/img/avatar1_small.jpg">
                    </span> <span class="username">Mainul Hasan</span> <b class="caret"></b>
                </a>
                    <ul class="dropdown-menu extended logout">
                        <div class="log-arrow-up"></div>
                        <li class="eborder-top"><a href="#"><i
                                class="icon_profile"></i> My Profile</a></li>
                        <li><a href="#"><i class="icon_mail_alt"></i> My Inbox</a>
                        </li>
                        <li><a href="#"><i class="icon_clock_alt"></i> Timeline</a>
                        </li>
                        <li><a href="#"><i class="icon_chat_alt"></i> Chats</a></li>
                        <li><a href="/logout"><i class="icon_key_alt"></i>
                                Log Out</a></li>
                    </ul></li>
                <!-- user login dropdown end -->
            </ul>
            <!-- notificatoin dropdown end-->
        </div>
    </header>`

    var sidebarNavTemplate = `
    <aside>
        <div id="sidebar" class="nav-collapse ">
            <!-- sidebar menu start-->
            <ul class="sidebar-menu">
                <li class="active"></li>
                <li><a onmouseout="this.style.cursor='default'" onmouseover="this.style.cursor='pointer'" class="" path="/admin/dashboard">Dashboard</a></li>
                <li class="sub-menu"><a class=""> <i
                        class="icon_document_alt"></i> <span>Books</span> <span
                        class="menu-arrow arrow_carrot-right"></span>
                </a>
                    <ul class="sub">
                        <li><a onmouseout="this.style.cursor='default'" onmouseover="this.style.cursor='pointer'" class="" path="/admin/book/addBook">Add Books</a></li>
                        <li><a onmouseout="this.style.cursor='default'" onmouseover="this.style.cursor='pointer'" class="" path="/admin/book/bookList">All Books</a></li>
                    </ul></li>
                <li class="sub-menu"><a class=""> <i
                        class="icon_document_alt"></i> <span>Category</span> <span
                        class="menu-arrow arrow_carrot-right"></span>
                </a>
                    <ul class="sub">
                        <li><a onmouseout="this.style.cursor='default'" onmouseover="this.style.cursor='pointer'" class="" path="/admin/category/addCategory">Add Category</a></li>
                        <li><a onmouseout="this.style.cursor='default'" onmouseover="this.style.cursor='pointer'" class="" path="/admin/category/categoryList">All Category</a></li>
                    </ul></li>
                <li class="sub-menu"><a class=""> <i
                        class="icon_desktop"></i> <span>UI Fitures</span> <span
                        class="menu-arrow arrow_carrot-right"></span>
                </a>
                    <ul class="sub">
                        <li><a class="" href="#">Elements</a></li>
                        <li><a class="" href="#">Buttons</a></li>
                        <li><a class="" href="#">Grids</a></li>
                    </ul></li>
                <li><a class="" href="#"> <i class="icon_genius"></i> <span>Widgets</span>
                </a></li>
                <li><a class="" href="#"> <i class="icon_piechart"></i> <span>Charts</span>

                </a></li>

                <li class="sub-menu"><a class=""> <i
                        class="icon_table"></i> <span>Tables</span> <span
                        class="menu-arrow arrow_carrot-right"></span>
                </a>
                    <ul class="sub">
                        <li><a class="" href="#">Basic Table</a></li>
                    </ul></li>

                <li class="sub-menu"><a href="" class=""> <i
                        class="icon_documents_alt"></i> <span>Pages</span> <span
                        class="menu-arrow arrow_carrot-right"></span>
                </a>
                    <ul class="sub">
                        <li><a class="" href="#">Profile</a></li>
                        <li><a class="" href="#"><span>Login Page</span></a></li>
                        <li><a class="" href="#"><span>Contact Page</span></a></li>
                        <li><a class="" href="#">Blank Page</a></li>
                    </ul>
                </li>
            </ul>
            <!-- sidebar menu end-->
        </div>
    </aside>`

    return {
        initialize: function () {
            document.querySelector("#nav-container").innerHTML = (headerNavTemplate + sidebarNavTemplate)
        }
    }

}())