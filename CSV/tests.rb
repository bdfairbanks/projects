require_relative "/Users/bdf/csv/functions_test.rb"


#basic math
farce = AccountInfo.new
farce.set_up_initial_values
farce.update_tally(50)
print farce.pretty_tally == 50

test2 = Category.new
test2.set_up_initial_values
test2.add_transaction(50)
print test2.tally_number == 50.0

outflowz = Outflow.new
inflowz = Inflow.new
outflowz.set_value("2")
inflowz.set_value("5")

outflowz.to_f == 5.0

# Setup
inflowz = Inflow.new

# Exercise
inflowz.set_value("$5,000.24")

# Verify
inflowz.to_f == 5000.24

flowz = outflowz.to_f - inflowz.to_f
print flowz == -3

#division
test3 = Category.new
test3.set_up_initial_values
test3.add_transaction(50)
test3.add_transaction(100)
print test3.avg_transaction == 75.0

#categories
weasels =["Weasels"]
test4 = AccountInfo.new
test4.set_up_initial_values
test4.add_category(weasels)
print test4.already_has_category(weasels)
