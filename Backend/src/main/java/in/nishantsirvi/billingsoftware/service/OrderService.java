package in.nishantsirvi.billingsoftware.service;

import in.nishantsirvi.billingsoftware.io.OrderRequest;
import in.nishantsirvi.billingsoftware.io.OrderResponse;
import in.nishantsirvi.billingsoftware.io.PaymentVerificationRequest;

import java.util.List;

public interface OrderService {

    OrderResponse createOrder(OrderRequest request);

    void deleteOrder(String orderId);

    List<OrderResponse> getLatestOrders();

    OrderResponse verifyPayment(PaymentVerificationRequest request);
}
