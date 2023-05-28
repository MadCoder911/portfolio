import styled from "styled-components";
export const Snippet = () => {
  const code = `if (event.body) {
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body);
    const calculateOrderAmount = () => {
      return shipping_fee + total_amount;
    };`;
  return (
    <Wrapper>
      <div className="top">
        <div className="left">
          <img
            src="https://avatars.githubusercontent.com/u/85245377?v=4"
            alt=""
          />
          <div className="content">
            <p className="purple">@Madcoder911</p>
            <p>Created 2 months ago</p>
          </div>
        </div>
        <div className="right"></div>
      </div>
      <div className="snippet">
        <code>{code}</code>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  .snippet {
    margin: 0px 0px;
    padding: 10px 10px;
    border: 1px solid var(--border);
    border-radius: 9px;
    background-color: rgb(1, 18, 33);
    padding: 20px;
    code {
      max-height: 220px;
      overflow: scroll;
      white-space: pre-wrap;
      width: max-content;
      overflow: hidden;
      width: 100%;
      font-size: 14px;
      line-height: 1.4;
    }
  }
  .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .left {
      display: flex;
      img {
        max-width: 30px;
        max-height: 30px;
        border-radius: 50%;
      }
      .content {
        margin-left: 10px;
      }
      .content p {
        margin: 0px;
        font-size: 11px;
      }
      .content p:first-child {
        margin: 0px;
        margin-bottom: 5px;
        margin-top: 5px;
      }
    }
  }
`;
