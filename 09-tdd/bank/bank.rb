class Bank
  attr_reader :name, :accounts #getter only

  # def accounts
  #   @accounts
  # end

  def initialize(name)
    @name = name
    @accounts = {}
  end

  def create_account(name, balance)
    @accounts[name] = balance
  end

  def deposit(name, amount)
    @accounts[name] += amount
  end

  def withdraw(name, amount)
      @accounts[name] -= amount unless amount >= @accounts[name]
      # @accounts[name] -= amount unless amount >= balance(name)
  end

  def balance(name)
    @accounts[name]
  end
end
