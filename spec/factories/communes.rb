# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :commune do
    code "MyString"
    name "MyString"
    district_code "MyString"
    province_code "MyString"
    coordinate ""
    bound_x "9.99"
    bound_y "9.99"
    temp_id 1
  end
end
