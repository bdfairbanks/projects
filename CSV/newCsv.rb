require 'CSV'

require 'pry'

#stylesheet

class AccountInfo
  def set_up_initial_values
    @tally = 0.00
    @categories = {}
  end

  def update_tally(amount)
    @tally += amount
  end

  def add_category(category_name)
    @categories[category_name] = Category.new
    @categories[category_name].set_up_initial_values
  end

  def pretty_tally
    return @tally.round(2)
  end

  def already_has_category(category_name)
    return (@categories[category_name] != nil)
  end

  def category(category_name)
    return @categories[category_name]
  end

  def categories
    return @categories
  end
end

#does having a class this small make sense?  Seems more like a function, or a misplaced part
#of another class. tempted to put it in AccountInfo, but it doesn't fit too well...
class Flow
  def set_value(number_string_from_csv)
    @value = number_string_from_csv.gsub(/[,\$]/, "").to_f.round(2)
  end

  def to_f
    return @value
  end
end

class Category
  def set_up_initial_values
    @tally = 0.00
    @num_transactions = 0
    @average_transaction_cost = 0.00
  end

  def add_transaction(amount)
    @tally += amount
    @num_transactions += 1
    @average_transaction_cost = @tally / @num_transactions
  end

  def pretty_tally
    @tally.round(2).to_s.ljust(10)
  end

  def pretty_avg_transaction
    @average_transaction_cost.round(2).to_s.ljust(20)
  end
end

# Code





#  Display

end
end
	CSV.open(filename, 'w') { |f|
			f .puts  ["Category", "Total Spent", "Average Transaction\n"]
			info.categories.each do |category, c_info|
				f .puts [category, c_info.pretty_tally, c_info.pretty_avg_transaction]
			end
		}
	end	

 
k +=1 
end
end

accounts.each do |name, info|
  puts "\n"
  puts "======================================================================"
  puts "Account: #{name}... Balance: $#{info.pretty_tally}"
  puts "======================================================================"
  puts "Category                     | Total Spent | Average Transaction"
  puts "---------------------------- | ----------- | -------------------------"
  info.categories.each do |category, c_info|
    print "#{category.ljust(28)} | $#{c_info.pretty_tally} | $#{c_info.pretty_avg_transaction}\n"
  end
  puts "\n"
end