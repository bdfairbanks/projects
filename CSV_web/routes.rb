require "sinatra"
require "./functions.rb"
require "CSV"
require "pry"
enable :sessions
# http:/localhost:4567/ ...
## want something that says if @login != nil, displays "logged in as: Dad"
## want if we are logged in a button that says "log out", if we click it 
## returns current page? or home page? login page?



get "/home" do
	erb :csv_home
end

post "/identify" do
	if params !={}
		@login = params.values.join(" ")
		session[:message] = @login
		redirect "/admin"
	else
		redirect "/home"
	end 
end

post "/logout" do
	session[:message] = ""
	redirect "/home"
end

get "/account" do
	@account_name = params
	build_accounts(@account_name["name"])
	erb :csv_views
end

post "/getinfo" do
	formArray = params.values 
	if formArray.include?("") == false  
		CSV.open("accounts.csv", "a") do |csv|
			formArray[4] = "$" + formArray[4]
			formArray[5] = "$" + formArray[5] 
			formArray[1] = "/n" + formArray[1].gsub(/[-]/,"/")
			csv << formArray
		end
	else
		redirect "/home" # it might be nice to define a site here that throws an error?
	end
	redirect "/account"
end

get "/admin" do
	if session[:message] == "Dad Priya and Sonia"
		
	else 
		redirect "/home"
	end
	erb :admin
end