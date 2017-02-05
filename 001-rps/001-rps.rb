require "pry"

##Class, intake and preperation of choices.
class Handstyle

  	def holder
		@choice = ""
 	end

 	def ask_correctly
 		puts "Pick a handstyle!"
 		@choice = gets.chomp.downcase
 	end

 	def weed_out
 		if @choice== "rock" || @choice == "paper" || @choice == "scissors"
 			puts "Good job"
 		else 
 			@choice= nil
 			puts "Pick rock, paper, or scissors, dummy."
 		end
 	end
 	def return
 		return @choice
	end
end

class Tally

	def set_up
		@counter_p1 = 0
		@counter_p2 = 0
		@win_counter_p1 = 0
		@win_counter_p2 = 0
	end

	def add_to_counter_p1(input)
		@counter_p1 += input
	end

	def add_to_counter2(input)
		@counter_p2 += input
	end

	def remember_wins
		if @counter_p1 == 3 && @win_counter_p1 <3

			@win_counter_p1 += 1

			@counter_p1 = 0

			@counter_p2 = 0

			return puts "p1 win one!(round)"

		elsif @counter_p2 == 3 && @win_counter_p2 <3

			@win_counter_p2 += 1

			@counter_p1 =0

			@counter_p2 =0

			return puts "p2 wins sometimes too!"
		end	
	end


	def return_counter_p1
		return @counter_p1
	end

	def return_counter_p2
		return @counter_p2
	end

	def return_win_counter_p1
		return @win_counter_p1
	end

	def return_win_counter_p2
		return @win_counter_p2
	end
end

#functions
#eventually there will be one p_input, i swear...

def get_input_p1()
	
	p1_choice =Handstyle.new

	while p1_choice.return == nil 

		p1_choice.holder

		p1_choice.ask_correctly

		p1_choice.weed_out

	end	
	
	puts "The future winner picked " +p1_choice.return

return p1_choice.return

end


def get_input_p2()
	
	p2_choice =Handstyle.new
	
	while p2_choice.return == nil 
	
		p2_choice =Handstyle.new

		p2_choice.holder

		p2_choice.ask_correctly

		p2_choice.weed_out

	end

	puts "The loathesome p2 picked " +p2_choice.return

return p2_choice.return

end
#the duel mechanism is the main engine of this peice.
def duel(choice1, choice2)
	if choice1 == "rock" && choice2 == "scissors"||choice1 == "paper" && choice2 == "rock"||choice1 == "scissors" && choice2 == "paper"
		points1 = 1 
		points2 = 0
	elsif choice1 == choice2
		points1 = 0
		points2 = 0
	else
		 points1 = 0
		 points2 = 1
	end

	return points1, points2
end

def judge(result)
		if result == [1,0]

			puts "P1 wins this round"

		elsif 

			result==[0,1]

			puts "P2 wins, somehow."

		else puts "A tie? Disgusting."

		end
end
#begin Program

tally = Tally.new

tally.set_up

#win_counter keeps track of the match score, looping this is messy, but it works.
while tally.return_win_counter_p1 <3 && tally.return_win_counter_p2 <3

#another messy loop, this one keeping track of the game by game score.
	while tally.return_counter_p1 <3 && tally.return_counter_p2 <3

		p1_choice = get_input_p1()

		p2_choice = get_input_p2()


		thats = duel(p1_choice, p2_choice)

		judge(thats)

		tally.add_to_counter_p1(thats.fetch(0))
		
		tally.add_to_counter2(thats.fetch(1))
		
		tally.remember_wins

	end

	if tally.return_win_counter_p1 == 3
	puts "Finish them, player 1!!!" 	
	
	elsif tally.return_win_counter_p2 == 3
		puts "Good game, p2, but p1 still wins somehow!!!"
	end
end	

## tests.

# testing filter
	#choice = ____
	# if choice== "rock" || choice == "paper" || choice == "scissors"
	# 	puts "Good job"
	# else 
	# 	puts "Pick rock, paper, or scissors, dummy."

#counters.

# counter =__  counter_p2 =___
#if counter_p1 == 3 && win_counter_p1 <3
# 			win_counter_p1 += 1
# 			counter_p1 = 0
# 			counter_p2 = 0
# 			puts "p1 win one!(round)"
# 		elsif counter_p2 == 3 && win_counter_p2 <3
# 			win_counter_p2 += 1
# 			counter_p1 =0
# 			counter_p2 =0
# 			puts "p2 wins sometimes too!"
# 		end	
#  puts win_counter_p1  Puts win_counter_p2

#engine tests

# duel("rock", "scissors")
# def duel(choice1, choice2)
# 	if choice1 == "rock" && choice2 == "scissors"||choice1 == "paper" && choice2 == "rock"||choice1 == "scissors" && choice2 == "paper"
# 		points1 = 1 
# 		points2 = 0
# 	elsif choice1 == choice2
# 		points1 = 0
# 		points2 = 0
# 	else
# 		 points1 = 0
# 		 points2 = 1
# 	end

# 	return points1, points2
# end