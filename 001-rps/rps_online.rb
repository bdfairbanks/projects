require "sinatra"

require "./functions.rb"

enable :sessions


get "/home" do
	erb :rps_home
end

 post "/choose" do

	@tally = Tally.new

	@tally.set_up

	p1_choice = params["p1_choice"]

	p2_choice = params["p2_choice"]

	thats = duel(p1_choice, p2_choice)

	@tally.add_to_counter_p1(thats.fetch(0))
		
	@tally.add_to_counter2(thats.fetch(1))
		
	@tally.remember_wins

	session[:message] =@tally

	redirect "/battledome"
end

get "/battledome" do
@tally = session[:message]
	if @tally.return_win_counter_p1 == 3|| @tally.return_win_counter_p2 == 3
		redirect "/teh_winner!"


	else 
		erb :battledome
	end
end

post "/choose_2" do

	@tally = session[:message]

	p1_choice = params["p1_choice"]

	p2_choice = params["p2_choice"]

	thats = duel(p1_choice, p2_choice)

	@tally.add_to_counter_p1(thats.fetch(0))
		
	@tally.add_to_counter2(thats.fetch(1))
		
	@tally.remember_wins

	session[:message] =@tally

	redirect "/battledome"
end

get "/teh_winner!" do

erb :teh_winner

end	
# in battledome inport tally 
# put tally 
# run program again, rewrite code rather than /chose, will need new /post
# redirect back to battledome 
# 	# if tally.return_win_counter_p1 == 3
# 	# puts "Finish them, player 1!!!" 	
	
# 	# elsif tally.return_win_counter_p2 == 3
# 		puts "Good game, p2, but p1 still wins somehow!!!"
# end