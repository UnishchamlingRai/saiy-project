import Wrapper from "../_components/UI/Wrapper";
import Head from "../_components/UI/Head";
import SearchInput from "../_components/UI/SearchInput";
import CustomSelect from "../_components/UI/CustomSelect";
import RechargeCardList from "../_components/Features/RechargeCard/RechargeCardList";
import Button from "../_components/UI/Button";
import AddRechargeCardFrom from "../_components/Features/RechargeCard/AddRechargeCardForm";

export const metadata = {
  title: "Recharge Card",
  description: "Recharge Card",
};

export default function page() {
  return (
    <Wrapper>
      <Head title="Recharge Card" />
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <SearchInput />
        </div>
        <div>
          <CustomSelect
            placeholder={"Recharge Type"}
            options={[
              {
                value: "option1",
                label: "Option 1",
              },
            ]}
          />
        </div>
        <AddRechargeCardFrom />
      </div>
      <RechargeCardList />
    </Wrapper>
  );
}
