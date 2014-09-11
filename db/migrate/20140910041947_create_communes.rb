class CreateCommunes < ActiveRecord::Migration
  def change
    create_table :communes do |t|
      t.column :code, "char(6)"
      t.string :name

      t.column :district_code, "char(4)"
      t.column :province_code, "char(2)"
      t.text :coordinate, limit: 4294967295

      t.decimal :bound_x
      t.decimal :bound_y
      t.integer :temp_id

      t.timestamps
    end
  end
end
