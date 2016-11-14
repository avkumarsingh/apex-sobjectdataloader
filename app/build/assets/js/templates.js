this["lillyClassified"] = this["lillyClassified"] || {};
this["lillyClassified"]["Templates"] = this["lillyClassified"]["Templates"] || {};

this["lillyClassified"]["Templates"]["default"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<!doctype html>\r\n<html lang=\"en\">\r\n\r\n  <head>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\r\n    <meta name=\"format-detection\" content=\"telephone=no\">\r\n    <title>Lilly Q n A</title>\r\n\r\n    <link href=\"http://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n    <link href=\"assets/css/materialize.css\" rel=\"stylesheet\">\r\n    <link href=\"assets/css/app.css\" rel=\"stylesheet\">\r\n    <link rel='stylesheet' type='text/css' href='http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css'/>\r\n    <!--<link href=\"assets/css/components.css\" rel=\"stylesheet\">-->\r\n  </head>\r\n\r\n  <body>\r\n    <main>\r\n      <div class=\"row\">\r\n"
    + ((stack1 = this.invokePartial(partials.nav,depth0,{"name":"nav","data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.body,depth0,{"name":"body","data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "       \r\n      </div>\r\n    </main>\r\n\r\n    <!-- <script src=\"//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js\" ></script> -->\r\n    \r\n    <script src=\"assets/js/libs.js\"></script>\r\n    <script src=\"assets/js/templates.js\"></script>\r\n    <script src=\"assets/js/app.js\"></script>\r\n\r\n  </body>\r\n</html>";
},"usePartial":true,"useData":true});

this["lillyClassified"]["Templates"]["home"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"content row lilly-grey-2\">\r\n"
    + ((stack1 = this.invokePartial(partials['search-banner'],depth0,{"name":"search-banner","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials['search-content'],depth0,{"name":"search-content","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});

this["lillyClassified"]["Templates"]["index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"content row lilly-grey-2\">\r\n    <div class=\"container\">\r\n      \r\n  \r\n    </div>\r\n</div>";
},"useData":true});

this["lillyClassified"]["Templates"]["breadcrumbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.active : depth0),{"name":"unless","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data) {
    return "                        <a href=\"#!\" class=\"breadcrumb active\">"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</a>\r\n";
},"4":function(depth0,helpers,partials,data) {
    return "                        <a href=\"#!\" class=\"breadcrumb\">"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</a>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"breadcrumbs row\">\r\n    <h1 class=\"title col s12\">\r\n        <span class=\"left\">"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</span>\r\n        <i class=\"left material-icons\">star</i>\r\n    </h1>\r\n    <nav class=\"col s12\">\r\n        <div class=\"row nav-wrapper\">\r\n            <div class=\"col s12\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.breadcrumbItems : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n    </nav>\r\n</div>";
},"useData":true});

this["lillyClassified"]["Templates"]["footer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!-- footer -->\r\n<footer>\r\nFOOTER\r\n</footer>\r\n<!--  end footer -->\r\n";
},"useData":true});

this["lillyClassified"]["Templates"]["nav"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<nav class=\"nav-container\">\r\n<div class=\"head-container\">\r\n <div class=\"left-container valign-wrapper\">\r\n   <a href=\"#\"><img src=\"assets/images/eli-lilly-logo-vector.png\" class=\"logo-lilly-icon center-align\"/></a>\r\n    <p class=\"lilly-welcome center-align\"><span class=\"opacity\">| </span>&nbsp; CUSTOMER RESPONSE : MEDICAL Q&A</p>\r\n    <!-- <p class=\"lilly-welcome-xs\"> PRT</p> -->\r\n </div>\r\n <div class=\"right-container valign-wrapper\">\r\n   <ul class=\"right center-align\">\r\n        <li class=\"user-name\">\r\n         <a class=\"lilly-welcome u-name\" href=\"#\">Ophelia Kennedy</a>\r\n       </li>\r\n        <li class=\"user-icon-container\">\r\n         <a class=\"welcome-user\" href=\"#\"><div class=\"user-icon\"></div></a>\r\n       </li>\r\n    </ul> \r\n </div>\r\n </div>\r\n</nav>\r\n\r\n";
},"useData":true});

this["lillyClassified"]["Templates"]["search-banner"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\r\n<div class=\"index-banner mob-landing\">\r\n  <div class=\"container search-container\">\r\n    <div class=\"row center\">\r\n        <div class=\"col s12 info-banner-mob\">\r\n            <p class=\"head\">Welcome to the Lilly Customer Response: Medical Questions & Answers landing Page</p>\r\n            <p class=\"message\"> This site was designed to allow cross-functional teams to search and request medical responses to commonly asked questions for internal purposes. Veeva Vault remains the source for external answers.</p>\r\n            <a href=\"\" class=\"thanks-btn\">THANKS</a> \r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n<div class=\"mob-btn-container\">\r\n    <a class=\"push-down-button\"><i class=\"material-icons\">keyboard_arrow_down</i></a>\r\n</div>\r\n\r\n\r\n<div class=\"index-banner\" id=\"main-banner\">\r\n  <div class=\"container search-container\">\r\n    <div class=\"row center\">\r\n        <div class=\"info-banner col l12\">\r\n          <p class=\"info-banner-head\">Welcome to the Lilly Customer Response: Medical Questions & Answers landing Page</p>\r\n            <p class=\"message\">This site was designed to allow cross-functional teams to search and request medical responses to commonly asked questions for internal purposes. Veeva Vault remains the source for external answers.</p>\r\n          <p>Please note: Disclaimer on internal use only</p>\r\n        </div>\r\n        \r\n        <div class=\"search-box\">\r\n                <form class=\"col l11 m11 s12\">\r\n                    <div class=\"col s8 input-wrapper-mob\">\r\n                         <span class=\"input-wrapper\">\r\n                        <input type=\"text\" class=\"search-input search-input-mob\" value placeholder=\"Enter your keyword here\">\r\n                        </span>\r\n                    </div>\r\n                    \r\n                    <div class=\"col s2 search-icon-mob\">\r\n                     <button type=\"button\" class=\"search-btn\"></button>\r\n                    </div>\r\n                    \r\n                    <div class=\"reset reset-mob col l1\"><a href=\"\"></a></div>\r\n                    \r\n                    <div class=\"border-cover col s12 m3 l2\">\r\n                      <div class=\"filter-wrapper input-field select1\">\r\n                        <select class=\"select_1\">\r\n                          <option value=\"\" disabled selected>ALL</option>\r\n                          <option value=\"1\">PRODUCT</option>\r\n                          <option value=\"2\">PLATFORM</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    \r\n                <div class=\"border-cover-1 select_prod col s12 m3 l2\">\r\n                  <div class=\"filter-wrapper input-field select2_prod\">\r\n                    <select class=\"select_2_prod\">\r\n                      <option value=\"\" disabled selected>NONE</option>\r\n                      <option value=\"1\">PRODUCT 1</option>\r\n                      <option value=\"2\">PRODUCT 2</option>\r\n                      <option value=\"3\">PRODUCT 3</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                    \r\n                <div class=\"border-cover-1 select_plat col s12 m3 l2\">\r\n                  <div class=\"filter-wrapper input-field select2_plat\">\r\n                    <select class=\"select_2_plat\">\r\n                      <option value=\"\" disabled selected>NONE</option>\r\n                      <option value=\"1\">PLATFORM 1</option>\r\n                      <option value=\"2\">PLATFORM 2</option>\r\n                      <option value=\"3\">PLATFORM 3</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                    \r\n                <div class=\"border-cover-2 col s12 m3 l2\">\r\n                 <div class=\"filter-wrapper input-field select3\">\r\n                    <select class=\"select_3\">\r\n                      <option value=\"\" disabled selected>NONE</option>\r\n                      <option value=\"1\">BLADDER</option>\r\n                      <option value=\"2\">GASTRIC</option>\r\n                      <option value=\"3\">HCC</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                    \r\n                <div class=\"col l1 m1 s2 search-icon search-icon-dt\">\r\n                     <button type=\"button\" class=\"search-btn\"></button>\r\n                </div>\r\n                <span class=\"input-wrapper input-wrapper-dt\">\r\n                    <input type=\"text\" class=\"search-input\" value placeholder=\"Enter your keyword here\">\r\n                </span>\r\n                <div style=\"clear:both;\"></div>\r\n                </form>\r\n                <div class=\"reset reset-dt col l1\"><a href=\"\"></a></div>\r\n                <div style=\"clear:both;\"></div> \r\n        </div>\r\n        \r\n        \r\n        <div class=\"request-btns request-btns-dt col l12\">\r\n            <a class=\"waves-effect waves-light btn-large\"><span>SUBMIT NEW REQUEST</span></a>\r\n            <a class=\"waves-effect waves-light btn-large\"><span>MY REQUEST</span></a>\r\n        </div>\r\n        <div style=\"clear:both;\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true});

this["lillyClassified"]["Templates"]["search-content_pld"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\r\n<div class=\"row search-content\">\r\n      <div class=\"col s12\">\r\n        <ul class=\"tabs\" style=\"width: 100%;\">\r\n          <li class=\"tab col l3 m3 s12\">\r\n            <a id=\"firstTab\" class=\"active\" href=\"#test1\">RECENT</a>\r\n          </li>\r\n          <li class=\"tab col l3 m3 s12\">\r\n            <a href=\"#test2\" class=\"\">NEW</a>\r\n          </li>\r\n          <li class=\"tab col l3 m3 s12\">\r\n            <a href=\"#test3\" class=\"\">NEED INFO</a>\r\n          </li>\r\n            <li class=\"tab col l3 m3 s12\">\r\n            <a href=\"#test3\" class=\"\">ESCALATED</a>\r\n          </li>\r\n            <li class=\"tab col l3 m3 s12\">\r\n            <a href=\"#test3\" class=\"\">IN PROGRESS</a>\r\n          </li>\r\n            <li class=\"tab col l3 m3 s12\">\r\n            <a href=\"#test3\" class=\"\">COMPLETED</a>\r\n          </li>\r\n        <div class=\"indicator\" style=\"right: 61.3906px; left: 0px;\"></div><div class=\"indicator\" style=\"right: 61.3906px; left: 0px;\"></div>\r\n          </ul>\r\n      </div>\r\n    \r\n      <div id=\"test1\" class=\"col s12\" style=\"\">\r\n          \r\n          \r\n          <div style=\"height: 400px;\"></div>\r\n          \r\n          Test 1</div>\r\n      <div id=\"test2\" class=\"col s12\" style=\"\">Test 2</div>\r\n      <div id=\"test3\" class=\"col s12\" style=\"\">Test 3</div>\r\n</div>\r\n    \r\n";
},"useData":true});

this["lillyClassified"]["Templates"]["search-content"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<nav class=\"container link-container no-shadow\">\r\n   <ul class=\"col s12 m12 l12 tabs hide-on-med-and-down\">\r\n      <li class=\"col s12 tab\"><a class=\" tab-link\" href=\"#recent\">Recent Searches  (20)</a></li>\r\n      <li class=\"col s12 tab\"><a class=\"tab-link\" href=\"#newlyadded\">Newly Added</a></li>\r\n      <li class=\"col s12 tab\"><a class=\"tab-link\" href=\"#approved\">Approved</a></li>\r\n  </ul>\r\n   <ul class=\" hide-on-large-only collapsible\">\r\n      <li class=\"col s12\">\r\n        <ul class=\"collapsible  col l12 m12 s12\" data-collapsible=\"accordion\">\r\n          <li class=\"ques-content\" id=\"recent-ques-head\">\r\n            <div class=\"no-padding collapsible-header tabular\" id=\"recent-searches-head\">\r\n              <div class=\"right filter-img\">\r\n                <img class=\"down\">\r\n              </div>\r\n              <div class=\"tab-link\">\r\n                Recent Searches\r\n              </div>\r\n            </div>\r\n            <span class=\"collapsible-body filter-container\" id=\"recent-searches-body\">\r\n              \r\n            </span>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"col s12\">\r\n        <ul class=\"collapsible  col l12 m12 s12\" data-collapsible=\"accordion\">\r\n          <li class=\"ques-content\" id=\"recent-ques-head\">\r\n            <div class=\"no-padding collapsible-header tabular\" id=\"newly-added-head\">\r\n              <div class=\"right filter-img\">\r\n                <img class=\"down\">\r\n              </div>\r\n              <div class=\"tab-link\">\r\n                Newly Added\r\n              </div>\r\n            </div>\r\n            <div class=\"collapsible-body filter-container\" id=\"question-body\">\r\n              newly added\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"col s12\">\r\n        <ul class=\"collapsible  col l12 m12 s12\" data-collapsible=\"accordion\">\r\n          <li class=\"ques-content\" id=\"recent-ques-head\">\r\n            <div class=\"no-padding collapsible-header tabular\" id=\"newly-added-head\">\r\n              <div class=\"right filter-img\">\r\n                <img class=\"down\">\r\n              </div>\r\n              <div class=\"tab-link\">\r\n                All approved\r\n              </div>\r\n            </div>\r\n            <div class=\"collapsible-body filter-container\" id=\"question-body\">\r\n              All approved\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n  </ul> \r\n</nav>\r\n<div class=\"container recent-questions high-grid\" id=\"recent\">\r\n  <div class=\"ques-header\">\r\n    <ul class=\"collapsible header-cont col l12 m12 s12\" data-collapsible=\"accordion\">\r\n      <li class=\"ques-content ques-header\" id=\"recent-ques-head\">\r\n        <div class=\"collapsible-header\" id=\"question-head\">\r\n          <div class=\"right filter-img\">\r\n            <span class=\"expand\"></span>\r\n          </div>\r\n          <div class=\"question-head\">\r\n            Questions <span class=\"recently-asked\">(Recently Asked)</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"collapsible-body filter-container\" data-collapsible=\"accordion\" id=\"question-body\">\r\n          <div class=\"no-margin\">\r\n            <ul class=\"collapsible region-box\"  id=\"region-box\">\r\n              <li class=\"ques-content ques-header\">\r\n                <div class=\"collapsible-header auto-height desktop-pointer-none\">\r\n                  <div class=\"ques-content-head\">\r\n                    Region\r\n                  </div>\r\n                </div>\r\n                <div class=\"collapsible-body border-none\" id=\"filter-region\">\r\n                    <select class=\"browser-default select-opt\" size=\"5\">\r\n                      <option class=\"ques-content-odd\" value=\"0\">Any Region</option>\r\n                      <option class=\"ques-content-even\" value=\"1\">ACE</option>\r\n                      <option class=\"ques-content-odd\" value=\"2\">AMBU</option>\r\n                      <option class=\"ques-content-even\" value=\"3\">GLOBAL</option>\r\n                    </select>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"no-margin\">\r\n            <ul class=\"collapsible region-box\" data-collapsible=\"accordion\" id=\"category-box\">\r\n              <li class=\"ques-content ques-header\">\r\n                <div class=\"collapsible-header auto-height desktop-pointer-none\">\r\n                  <div class=\"ques-content-head\">\r\n                    Categories\r\n                  </div>\r\n                </div>\r\n                <div class=\"collapsible-body border-none\" id=\"filter-category\">\r\n                  <select class=\"browser-default select-opt\" size=\"5\">\r\n                      <option class=\"ques-content-odd\" value=\"0\">Any Category</option>\r\n                      <option class=\"ques-content-even\" value=\"1\">Other</option>\r\n                      <option class=\"ques-content-odd\" value=\"2\">Efficacy</option>\r\n                      <option class=\"ques-content-even\" value=\"3\">Safety</option>\r\n                      <option class=\"ques-content-even\" value=\"3\">Quality</option>\r\n                  </select>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"no-margin\">\r\n            <ul class=\"collapsible region-box datebox\" data-collapsible=\"accordion\" id=\"date-box\">\r\n              <li class=\"ques-content ques-header\">\r\n                <div class=\"collapsible-header auto-height desktop-pointer-none\">\r\n                  <div class=\"ques-content-head\">\r\n                    Modified Date\r\n                  </div>\r\n                </div>\r\n                <div class=\"collapsible-body border-none\" id=\"filter-date\">\r\n                      <ul class=\"region-box datebox\">\r\n                        <li class=\"ques-content-odd date-parent\" id=\"date\">Any modified Date</li>\r\n                        <li class=\"ques-content-even date-parent\" > \r\n                          <input class=\"datepicker\" type=\"text\" value=\"Select Date\" id=\"selectdate\">\r\n                        </li> \r\n    \r\n                      </ul>\r\n                    </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n           <div class=\"container center-align\">\r\n           <button class=\"btn-cancel\"><p class=\"btn-txt\">Cancel</p></button>\r\n            <button class=\"btn-submit\"><p class=\"btn-txt\">Submit</p></button>\r\n          </div>\r\n          <!-- <div class=\"request-btns request-btns-dt col l12\">\r\n            <a class=\"waves-effect waves-light btn-large\"><span>SUBMIT NEW REQUEST</span></a>\r\n            <a class=\"waves-effect waves-light btn-large\"><span>MY REQUEST</span></a>\r\n          </div> -->\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <!--This goes under the tab section-->\r\n  <ul class=\"header-cont bottom-cont col l12 s12 m12\" >\r\n    <li class=\"ques-content item-inner-filter\">\r\n      <div class=\"collapsible-header\">\r\n        <ul>\r\n          <li class=\"left filter-cls\" id=\"filter\">\r\n            <div class=\"filter-btn\">\r\n              <div class=\"filter-txt\">\r\n                Region\r\n              </div>\r\n              <div class=\"filter-cross-img\">\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"left filter-cls\" id=\"filter\">\r\n            <div class=\"filter-btn\">\r\n              <div class=\"filter-txt\">\r\n                Category\r\n              </div>\r\n              <div class=\"filter-cross-img\">\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"left filter-cls\" id=\"filter\">\r\n            <div class=\"filter-btn\">\r\n              <div class=\"filter-txt\">\r\n                Date\r\n              </div>\r\n              <div class=\"filter-cross-img\">\r\n              </div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </li>\r\n    </ul>\r\n    <ul class=\"collapsible question-grid bottom-cont col l12 s12 m12\" data-collapsible=\"accordion\">\r\n      <li class=\"ques-content select-even\">\r\n        <div class=\"collapsible-header item-txt question-result\">\r\n          <div class=\"right filter-image\">\r\n            <span class=\"transdown\"></span>\r\n          </div>\r\n            <div>\r\n              Lorem ipsum dolor sit amet, conse adipiscing elit, sed \r\n            </div>\r\n        </div>\r\n        <div class=\"collapsible-body item-txt colapse-body\">\r\n          body\r\n        </div>\r\n      </li>\r\n      <li class=\"ques-content select-odd\">\r\n        <div class=\"collapsible-header item-txt question-result\">\r\n          <div class=\"right filter-image\">\r\n            <span class=\"transdown\"></span>\r\n          </div>\r\n            <div>\r\n              Lorem ipsum dolor sit amet, conse adipiscing elit, sed \r\n            </div>\r\n        </div>\r\n        <div class=\"collapsible-body item-txt colapse-body\">\r\n          body\r\n        </div>\r\n      </li>\r\n      <li class=\"ques-content select-even\">\r\n        <div class=\"collapsible-header item-txt question-result\">\r\n          <div class=\"right filter-image\">\r\n            <span class=\"transdown\"></span>\r\n          </div>\r\n            <div>\r\n              Lorem ipsum dolor sit amet, conse adipiscing elit, sed \r\n            </div>\r\n        </div>\r\n        <div class=\"collapsible-body item-txt colapse-body\">\r\n          body\r\n        </div>\r\n      </li>\r\n      <li class=\"ques-content select-odd\">\r\n        <div class=\"collapsible-header item-txt question-result\">\r\n          <div class=\"right filter-image\">\r\n            <span class=\"transdown\"></span>\r\n          </div>\r\n            <div>\r\n              Lorem ipsum dolor sit amet, conse adipiscing elit, sed \r\n            </div>\r\n        </div>\r\n        <div class=\"collapsible-body item-txt colapse-body\">\r\n          body\r\n        </div>\r\n      </li>\r\n      <li class=\"ques-content select-even\">\r\n        <div class=\"collapsible-header item-txt question-result\">\r\n          <div class=\"right filter-image\">\r\n            <span class=\"transdown\"></span>\r\n          </div>\r\n            <div>\r\n              Lorem ipsum dolor sit amet, conse adipiscing elit, sed \r\n            </div>\r\n        </div>\r\n        <div class=\"collapsible-body item-txt colapse-body\">\r\n          body\r\n        </div>\r\n      </li>\r\n</ul>\r\n</div>";
},"useData":true});

this["lillyClassified"]["Templates"]["gridCards"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.productCard,depth0,{"name":"productCard","hash":{"data":(depth0 != null ? depth0.data : depth0)},"data":data,"indent":"\t\t\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['productCard-listview'],depth0,{"name":"productCard-listview","hash":{"data":(depth0 != null ? depth0.data : depth0)},"data":data,"indent":"\t\t\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"select-type\">\r\n	<p>\r\n		<a href=\"javascript:void(0);\" class=\"btn active\">Sale Ads</a>\r\n		<a href=\"javascript:void(0);\" class=\"btn\">Want Ads</a>\r\n	</p>\r\n</div>\r\n<div class=\"row\">\r\n	<div class=\"row ad-filter\">\r\n		<p class=\"col sort-control\">\r\n			<a href=\"javascript:void(0);\" class=\"active select-view-grid\"><i class=\"material-icons\">apps</i></a>\r\n			<a href=\"javascript:void(0);\" class=\"select-view-list\"><i class=\"material-icons\">list</i></a>\r\n		</p>\r\n		<p class=\"col right filter-control\">\r\n			<a class=\"\"><i class=\"material-icons\">filter_list</i><span class=\"right-align\">Filter</span></a>\r\n		</p>\r\n	</div>\r\n	<div class=\"row ad-sort\">\r\n		<div class=\"input-field dropdown col s12 m5 l4\">\r\n			<label>Sort By:</label>\r\n			<select>\r\n			<option value=\"1\">Latest Ad</option>\r\n			<option value=\"2\">Recommended Ads</option>\r\n			<option value=\"3\">Latest Viewed Ads</option>\r\n\r\n			</select>\r\n  		</div>\r\n		<div class=\"input-field dropdown col s12 m5 l5 filter hide\">\r\n			<label>Price Range:</label>\r\n			<select>\r\n				<option value=\"\" disabled selected>Select</option>\r\n				<option value=\"1\">Low to High price</option>\r\n				<option value=\"2\">High to Low price</option>\r\n			</select>\r\n		</div>\r\n	</div>\r\n	<div class=\"row ad-info\">\r\n\r\n		<p class=\"col right slider-control\">\r\n		<span> 1-7 of 7 </span>\r\n		 <button class=\"slider-left btn btn-prop slick-arrow\" style=\"display: inline-block;\"><i class=\"material-icons\">first_page</i></button>\r\n                        <button class=\"slider-left btn btn-prop slick-arrow\" style=\"display: inline-block;\"><i class=\"material-icons\">keyboard_arrow_left</i></button>\r\n                        <button class=\"slider-right btn btn-prop slick-arrow\" style=\"display: inline-block;\"><i class=\"material-icons\">keyboard_arrow_right</i></button>\r\n                        <button class=\"slider-left btn btn-prop slick-arrow\" style=\"display: inline-block;\"><i class=\"material-icons\">last_page</i></button>\r\n                    </p>\r\n	</div>\r\n	<div class=\"simpleview\">\r\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0['auto-collector-cars'] : depth0)) != null ? stack1.cards : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\r\n\r\n	<div class=\"listview hide\">\r\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0['auto-collector-cars'] : depth0)) != null ? stack1.cards : stack1),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\r\n</div>";
},"usePartial":true,"useData":true});