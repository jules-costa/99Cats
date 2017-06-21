require 'byebug'
require_relative 'player'
class Board
  attr_accessor :cups, :player1, :player2

  def initialize(name1, name2)
    @cups = Array.new(14) {[]}
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    @cups.each_index do |i|
      next if i == 6 || i == 13
      4.times do
        @cups[i] << :stone
      end
    end
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" if !start_pos.between?(1, 12)
  end

  def make_move(start_pos, current_player_name)
    # debugger
    start_pos -= 1 if start_pos.between?(1, 6)
    # player = @player1.name == current_player_name ? @player1 : @player2

    num_stones = @cups[start_pos].count

    @cups[start_pos + 1..num_stones].map! do |cup|
      # if player == @player1
        # next if @cups.index(cup) == 6
          cup << @cups[start_pos].pop
      # else
        # next if @cups.index(cup) == 13
          # cup << @cups[start_pos].pop
      # end
    end

  # end_cup = @cups[start_pos + num_stones + 1]

  # if player == @player1
  #   if @cups.index(end_cup) == 6
  #     return :prompt
  #   elsif end_cup.count == 1
  #     return :switch
  #   else
  #     return @cups.index(end_cup)
  #   end
  # end



    #     if start_pos + stones == 6
    #       return :prompt
    #     elsif @cups[start_pos + stones].count == 1
    #       return :switch
    #     elsif @cups[start_pos + stones].count > 1
    #       return start_pos + stones
    #     end
    #
    #   # end
    # end


  end

  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returns
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    return true if @cups[0..5].all?(&:empty?)
    return true if @cups[7..12].all?(&:empty?)
    false
  end

  def winner
    if @cups[13].count > @cups[6].count
      return @player2.name
    elsif @cups[13].count < @cups[6].count
      return @player.name
    elsif @cups[6].count == @cups[13].count
      return :draw
    end
  end
end
