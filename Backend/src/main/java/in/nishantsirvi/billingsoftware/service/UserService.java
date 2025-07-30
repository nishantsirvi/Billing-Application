package in.nishantsirvi.billingsoftware.service;

import in.nishantsirvi.billingsoftware.io.UserRequest;
import in.nishantsirvi.billingsoftware.io.UserResponse;

import java.util.List;

public interface UserService {

    UserResponse createUser(UserRequest request);

    String getUserRole(String email);

    List<UserResponse> readUsers();

    void deleteUser(String id);
}
