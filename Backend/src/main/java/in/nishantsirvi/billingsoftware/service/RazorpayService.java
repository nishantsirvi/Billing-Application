package in.nishantsirvi.billingsoftware.service;

import com.razorpay.RazorpayException;
import in.nishantsirvi.billingsoftware.io.RazorpayOrderResponse;

public interface RazorpayService {

    RazorpayOrderResponse createOrder(Double amount, String currency) throws RazorpayException;
}
