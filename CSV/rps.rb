
class Game
  def play
    p1 = ask_player_for_rps_weapon_choice
    p2 = ask_player_for_rps_weapon_choice

    puts winner(p1, p2)
  end

  def ask_player_for_rps_weapon_choice
    puts "What is your weapon?"
    gets.chomp
  end

  def winner(p1_choice, p2_choice)
    if (p1_choice == "Scissors") && (p2_choice == "Paper")
      return "Player 1 wins!"
    else
      return "Player 2 wins!"
    end
  end
end
x = Game.new
x.play