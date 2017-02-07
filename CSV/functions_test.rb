require "csv"

class AccountInfo
  def set_up_initial_values(t=0.00)
  	# if t == nil
  	# 	t = 0.00
  	# else
  	# 	t = ______
  	# end

    @tally = t
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

  def tally_number
  	return @tally.round(2)
  end

  def pretty_tally
    return tally_number.to_s.ljust(10)
  end

  def avg_transaction
  	return @average_transaction_cost.round(2)
  end

  def pretty_avg_transaction
    return avg_transaction.to_s.ljust(20)
	end
end

class Outflow
  def set_value(number_string_from_csv)
    @value = number_string_from_csv.gsub(/[,\$]/, "").to_f.round(2)
  end

  def to_f
    return @value
  end
end

class Inflow
  def set_value(number_string_from_csv)
    @value = number_string_from_csv.gsub(/[,\$]/, "").to_f.round(2)
  end

  def to_f
    return @value
  end
end