require_relative '../bank'

describe Bank do
  let (:bank) { Bank.new 'TDD bank' }

  # class methods use .
  describe '.new' do
    it 'creates a new bank object' do
      expect(bank).to_not be nil
    end

    it 'assigns the bank a name' do
      expect(bank.name).to eq 'TDD bank'
    end
  end
  
  # instance methods use #
  describe '#create_account' do
    it 'creates an account for a particular user' do
      bank.create_account 'Craigsy', 7
      expect(bank.accounts['Craigsy']).to eq 7
    end
  end

  describe '#deposit' do
    it 'deposits money into a particular account' do
      # exercise
      bank.create_account 'Jonesy', 200
      bank.deposit 'Jonesy', 300
      # assertion / expectation
      expect(bank.accounts['Jonesy']).to eq 200+300
    end
  end

  describe '#withdraw' do
    it 'withdraws an amount from a particular account' do
      bank.create_account 'Mad Robby', 1000
      bank.withdraw 'Mad Robby', 800
      expect(bank.accounts['Mad Robby']).to eq 1000-800
    end

    it 'ignores withdrawals that exceed the balance' do
      bank.create_account 'Dale', 1
      bank.withdraw 'Dale', 1_000_000
      expect(bank.balance('Dale')).to eq 1
    end
  end

  describe '#balance' do
    it 'returns the balance for some particular account' do
      bank.create_account 'Charles', 5000
      bal = bank.balance 'Charles'
      expect(bal).to eq 5000
    end
  end
end


# DSL
# Domain Specific Language
